import Domoticz

from time import sleep
import queue
from threading import Thread
from Classes.ZigpyTransport.tools import handle_thread_error



def start_forwarder_thread(self):
    self.forwarder_thread.start()

def stop_forwarder_thread(self):
    self.forwarder_queue.put( "STOP")
    
def forwarder_thread(self):
    self.logging_forwarded("Status", "ZigpyTransport: thread_processing_and_sending Thread start.")

    while self.running:
        message = None
        # Sending messages ( only 1 at a time )
        try:
            self.logging_forwarded("Debug", "Waiting for next message")
            message = self.forwarder_queue.get()
            if message == "STOP":
                break   
        except queue.Empty:
            # Empty Queue, timeout.
            continue
        except Exception as e:
            context = {
                "Error code": "TRANS-FWD-01",
                "Error": str(e),
                "Message": message,
            }
            self.logging_forwarded("Error", "forwarder_thread - Error while receiving a ZiGate command", _context=context)

            handle_thread_error(self, e)

    self.logging_forwarded("Status", "ZigpyTransport: thread_processing_and_sending Thread stop.")

def forward_message(self, message):  
    self.logging_forwarded("Debug", "Receive a message to forward: %s" % (str(message)))
    self.statistics._data += 1
    self.F_out(message)
    self.logging_forwarded("Debug", "message forwarded!!!!")