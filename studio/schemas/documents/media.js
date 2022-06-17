export default {
  name: 'media',
  type: 'document',
  title: 'Media',
  fields: [
    {
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ]
    }
  ],
}