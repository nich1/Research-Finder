app.get('/get-posts', async (req: Request, res: Response) => {
    try {
        const limit: number = parseInt(req.query.limit as string, 10) || 10;
        const query: string = (req.query.q as string) || '';
        
        const postsRef = db.collection('posts');
        let querySnapshot;

        if (query) {
            querySnapshot = await postsRef
                .where('title', '>=', query)
                .where('title', '<=', query + '\uf8ff')
                .limit(limit)
                .get();
        } else {
            querySnapshot = await postsRef.limit(limit).get();
        }

        if (querySnapshot.empty) {
            return res.status(200).json({ message: 'No posts found', posts: [] });
        }

        const posts: Post[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
