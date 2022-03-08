import asyncio
from queue import Queue
import websockets
import Domoticz
from threading import Thread
import logging

class UIWebSocket(object):
    
    def __init__(self):
        self.websocket_running = None
        self.websocket_thread = Thread(name="WebSocket", target=websocket_thread, args=(self,))
        self.webSocket = None
        self.start_websocket_thread()
    
    def start_websocket_thread(self):
        Domoticz.Log("start_websocket_thread - Starting websocket thread")
        self.websocket_running = True
        self.websocket_thread.start()


    def stop_websocket_thread(self):
        Domoticz.Log("stop_websocket_thread - Stopping websocket thread")
        self.webSocket.close()
        self.websocket_running = False


def websocket_thread(self):
    Domoticz.Log("websocket_thread - Starting websocket thread")
    asyncio.run( async_uiwebsocket_loop(self))

async def async_uiwebsocket_loop( self ):

    Domoticz.Log("websocket_thread - create socket")
    logger = logging.getLogger('websockets')
    logger.setLevel(logging.DEBUG)
    self.webSocket = await websockets.serve(handler, host="0.0.0.0", port=8441)
    Domoticz.Log("websocket_thread - create socket %s" %str(self.webSocket))

    while self.websocket_running:
        # Keep it on until we need to stop
        await asyncio.sleep( 1)
    Domoticz.Log("websocket_thread - exiting")
        
# create handler for each connection
async def handler(websocket, path):

    # Receive request
    Domoticz.Log("websocket_thread - handle %s/%s" %( websocket, path))
    data = await websocket.recv()
    
    Domoticz.Log("websocket_thread - receive %s" %data)
    # Send a reply
    reply = f"Data receive as:  {data}!"
    await websocket.send(reply)

