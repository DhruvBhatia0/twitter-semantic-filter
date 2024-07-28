from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPEN_AI_KEY"))


stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "there once was a boy named harry who"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")
