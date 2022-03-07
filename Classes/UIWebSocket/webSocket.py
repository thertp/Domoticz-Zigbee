import asyncio
from queue import Queue
import websockets
import Domoticz
from threading import Thread

class UIWebSocket(object):
    
    def __init__(self):
        self.websocket_running = None
        self.websocket_thread = Thread(name="WebSocket", target=websocket_thread, args=(self,))
        self.websocket_queue = Queue()
        self.start_websocket_thread()
    
    def start_websocket_thread(self):
        Domoticz.Log("start_websocket_thread - Starting websocket thread")
        self.websocket_thread.start()


    def stop_websocket_thread(self):
        Domoticz.Log("stop_websocket_thread - Stopping websocket thread")
        self.websocket_queue.put("STOP")
        self.websocket_running = False


def websocket_thread(self):
    Domoticz.Log("websocket_thread - Starting websocket thread")
    self.websocket_running = True
    asyncio.run( async_uiwebsocket_loop(self))

async def async_uiwebsocket_loop( self ):

    Domoticz.Log("websocket_thread - create socket")
    start_server = websockets.serve(handler, host=None, port=8441)
    Domoticz.Log("websocket_thread - create socket %s" %str(start_server))

    while self.websocket_running:
        Domoticz.Log("websocket_thread - waiting")
        await asyncio.sleep( 5.0)
    Domoticz.Log("websocket_thread - exiting")
        
# create handler for each connection
async def handler(websocket, path):

    # Receive request
    data = await websocket.recv()
    
    Domoticz.Log("websocket_thread - receive %s" %data)
    # Send a reply
    reply = f"Data receive as:  {data}!"
    await websocket.send(reply)
