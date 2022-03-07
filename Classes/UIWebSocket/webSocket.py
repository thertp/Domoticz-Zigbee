import asyncio
from queue import Queue
import websockets

class UIWebSocket(object):
    
    def __init__(self):
        self.websocket_running = None
        self.websocket_thread = None
        self.websocket_queue = Queue()
    
    def start_websocket_thread(self):
        self.log.logging("UIWebSocket", "Debug", "start_websocket_thread - Starting websocket thread")
        self.websocket_thread.start()


    def stop_websocket_thread(self):
        self.log.logging("UIWebSocket", "Debug", "stop_websocket_thread - Stopping websocket thread")
        self.websocket_queue.put("STOP")
        self.websocket_running = False


    def websocket_thread(self):
        self.log.logging("UIWebSocket", "Debug", "websocket_thread - Starting websocket thread")
        self.websocket_running = True
        asyncio.run(
            async_uiwebsocket_loop(self)
        )

def async_uiwebsocket_loop( self ):

    start_server = websockets.serve(handler, host=None, port=9441)

    while self.websocket_running:
        asyncio.sleep( 1.0)
        
# create handler for each connection
async def handler(websocket, path):

    # Receive request
    data = await websocket.recv()
    
    # Send a reply
    reply = f"Data receive as:  {data}!"
    await websocket.send(reply)