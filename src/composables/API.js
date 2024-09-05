export const useAPI = () => {
  let path = 'https://api.openai.com/v1'

  const textToImage = async (prompt) => {
    // https://platform.openai.com/docs/api-reference/images
    return await fetch(`${path}/images/generations`, {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        n: 2,
        size: '256x256'
      }),
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
  }

  return { textToImage }
}