import requests
import os
from dotenv import load_dotenv
from fastapi import APIRouter

router = APIRouter()
load_dotenv()


@router.get("/callback/")
async def callback(code: str) -> dict:
    # Retrieve access token
    data = {
        "grant_type": "authorization_code",
        "client_id": os.environ.get("CLIENT_ID"),
        "client_secret": os.environ.get("CLIENT_SECRET"),
        "code": code,
        "redirect_uri": os.environ.get("REDIRECT_URI")
    }
    req = requests.post(url="https://api.intra.42.fr/oauth/token", data=data)
    access_token = req.json().get("access_token")

    # Retrieve userdata
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    req = requests.get(url="https://api.intra.42.fr/v2/me", headers=headers)

    return req.json()