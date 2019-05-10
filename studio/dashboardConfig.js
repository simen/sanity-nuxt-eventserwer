export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-eventserwer-studio',
                  apiId: '7133214f-3c3d-4852-9f46-d1e078ca3554'
                },
                {
                  buildHookId: '5cd54bad6640021264557c03',
                  title: 'Events Website',
                  name: 'sanity-nuxt-eventserwer',
                  apiId: '434a6efa-c77e-46d0-9b82-a63516b5f4fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-eventserwer',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-eventserwer.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
