from fastapi import FastAPI
from pydantic import BaseModel

from usernamechecker import UsernameChecker

#checker = UsernameChecker("config.json")

class UsernameCheckRequest(BaseModel):
    requester: str
    names: list

app = FastAPI()

@app.get("/")
def hello_world():
    return {'result': 'Hello, World!'}

@app.post("/check/name/threads/")
async def check_names(request: UsernameCheckRequest):
    data = request.dict()
    #return checker.check_usernames(request['names'], request['requester'])
    return data
