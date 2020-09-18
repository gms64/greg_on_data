export default async () => {
    const { $content } = require("@nuxt/content");
    const postFiles = await $content('posts', { deep: true }).only(["path"]).fetch();
    const postRoutes =  postFiles.map((file) => (
        {
            url: file.path.replace('/posts/','/blog/'),
            priority: 0.7,
        }
        ))

    const pageFiles = await $content('pages', { deep: true }).only(["path"]).fetch();
    const pageRoutes =  pageFiles.map((file) => (
            {
                url: file.path.replace('/pages/','/'),
                priority: 0.9,
            }
        ))

    const projectFiles = await $content('projects', { deep: true }).only(["path"]).fetch();
    const projectRoutes =  projectFiles.map((file) => (
        {
            url: file.path,
            priority: 0.8,
        }
        ))

    const addlRoutes = [
        {
            url: '/',
            priority: 1,
        },
        {
            url: '/404/',
            priority: 0.5,
        }
    ]

    const allRoutes = [...postRoutes, ...pageRoutes, ...projectRoutes, ...addlRoutes];

    
    return allRoutes;
  };
  