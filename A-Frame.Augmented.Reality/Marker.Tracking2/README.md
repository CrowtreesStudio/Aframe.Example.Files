## A-frame & AR.js - Detect Marker(s)
Basic marker implementation.
The detect.js has a working component that is attached to each marker and will trigger an event when the marker is visible to the camera. When tracking is lost another event is triggered.

The goal is to create a method of displaying each marker's model (object) when viewed solo but display a different model when two or more are visible to the camera.

I.E. marker One will display a yellow cube with an orbiting purple cube
If marker One & Two are visible, a message or alternate object will be displayed
If markers One, Two & Three are visible a video or alternate object will be displayed.
