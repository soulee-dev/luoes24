from fastapi import FastAPI
from server.routes import router as CallbackRouter

app = FastAPI()

@app.get("/", tags=["Root"])
async def read_root():
  return {
    "message": "Welcome to luoes24"
   }

app.include_router(CallbackRouter)