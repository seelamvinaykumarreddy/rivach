import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ulm0evk6',
  dataset: 'production',
  useCdn: true,
})
