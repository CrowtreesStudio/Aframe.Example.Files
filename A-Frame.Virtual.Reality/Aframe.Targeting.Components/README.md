## A-frame Changing Component Properties in Code
<p>Using the second cursor warm-up example, the click event is used to target the Environment Component to change the Preset property. In effect, it will move through a list of select preset environments that come with the component.</p>
<p>Look at the 'cursor.js' file and you will see that we first set up an array with the environment presets we wish to use. Then on each click we increment the lookup number by one, progressing through the array one register at a time.</p>
<p>On a more general note, this demonstrates a method of communicating between components whether they are custom (yours) and/or from a repository.</p>
<p>If you see an better way of implementing this I would love to hear from you :) </p>
<p>Thank you and good luck!</p>
