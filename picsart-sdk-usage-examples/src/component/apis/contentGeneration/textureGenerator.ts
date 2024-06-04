export const textureGenerator =  async (item: any): Promise<object> => {
  console.log(item.title)
  return Promise.resolve(item)
}
