// TODO:  remove later for testing purposes only
// const payloadApiUrl = "https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json";
const payloadApiUrl = "http://localhost:3000/payload.json";

export const apiCall = async <T> (url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    return responseData;
  } catch(error) {
    if (error instanceof Error) {
      console.error(`Something went wrong: ${error.message}`);
    } else {
      console.error(`Something went wrong: ${error}`);
    }

    return Promise.reject(error);
  }
}
