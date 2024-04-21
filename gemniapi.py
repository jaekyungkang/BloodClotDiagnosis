from dotenv import load_dotenv
import os
import google.generativeai as genai

load_dotenv('GOOGLE_API_KEY.env')

genai.configure(api_key=os.environ['API_KEY'])
model = genai.GenerativeModel('gemini-pro')

def getPrompt (probScore):
    if probScore >= 0.85:
        prompt = ("Provide reccomendations for someone who very likely has blood clots (very likely >80%). In these reccomendations provide possible lifestyle changes and someone who should seek help immediatly. These reccomendations should be provided to the doctor as a form of second opinion rather than primary diagnosis.")
    elif probScore >= 0.5:
        prompt = ("Provide reccomendations for someone who likely has blood clots. In these reccomendations provide possible lifestyle changes. These reccomendations should be provided to the doctor as a form of second opinion rather than primary diagnosis.")
    else:
        prompt = ("Provide a reccomendation for someone who who may have blood clots, but the model is not quite sure. These reccomendations should be provided to the doctor as a form of second opinion rather than primary diagnosis.")
    return prompt

def gen_res(probScore):
    print(probScore)
    prompt = getPrompt(probScore)
    print(prompt)


    response = model.generate_content(prompt)
    print(response)

    return response
