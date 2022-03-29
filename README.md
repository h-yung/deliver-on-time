# stopwatchDeliveryGame
Small game based on a stopwatch to make waiting less painful. Similar philosophy as the Google t-rex.

Page design is simple and mostly responsive.

Google font for headings may not display properly in Firefox depending on local sandbox security settings.

<h2>Player can do three things:</h2>

<ul>
	<li> Set a target time.

	<li>Start and then stop the stopwatch to try to match the target time within a margin of error (currently given as 0.5sec).

	Page will display whether player succeeded or failed, then allow player to go again by setting new target time.

Changes from baseline:

	Original stopwatch exercise had conditionals that threw errors for: 

		consecutive call on start() function

		consecutive call on stop() function

	Gameplay removes the above error/alert need by disabling buttons after one click and also signals through CSS styling what is a valid action or not.

	CSS is used to provide additional visual cues by switching out imagery.

	Some console-only notes (such as tied to SET TIME/reset) remain for those who bother opening the console.

	CSS issue to resolve: understanding why stop button remains red despite other button:disabled styling applied. Currently patched over temporarily.


Walkthrough:

When player clicks SET TIME, the only functional button,

	A random number between 0 and 1 is generated, multipied by 10 for a max 10sec target time, which is displayed onscreen.

	Player can no longer click SET TIME but START becomes clickable.

	When player clicks START, the current date/time is set (new Date).


	START becomes disabled; STOP is enabled.

	Image for "start" is hidden; image for "enroute" is made visible.

When player clicks STOP, 
	the current date/time is set (new Date).

	STOP becomes disabled; SET TIME is enabled.

	Image for "enroute" is hidden.

	The duration elapsed between click of START and STOP is calculated and compared to target time (absolute value).

	Conditionally, if it's within the allowable margin, SUCCESS is signaled through announcement and image reveal, and time achieved is also reported.
	If not, FAILURE is signaled in same form, with different imagery. Time achieved is still reported.

When player next clicks SET TIME,

	duration, start time, end time, are all zeroed out,

	announcement area is cleared/made empty,

	and image visibilities changed back to show only starting image for a fresh start.
