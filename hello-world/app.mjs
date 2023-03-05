

import { Configuration, OpenAIApi } from 'openai'
import fs from 'fs/promises'

const apiKey = 'here-comes-your-openapi-key';

const configuration = new Configuration({
    apiKey: apiKey,
  });

const openai = new OpenAIApi(configuration);

export const lambdaHandler = async (event, context) => {
    try {
        
       /* var data1 = await fs.readFile('./temp/2.1GettingStarted.txt', 'utf8');

        console.log(data);

        const response1 = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: data1
          });*/
        
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            temperature: 0,
            prompt: "who is the instructor of this course?"
          });
        
        console.log(completion.data.choices[0].text);

        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
