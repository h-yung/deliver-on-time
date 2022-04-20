# stopwatchDeliveryGame
Small game based on a stopwatch to make waiting less painful. Similar philosophy as the Google t-rex.

Simple responsive layout.

Google font for headings may not display properly in Firefox depending on local sandbox security settings.

<h2>Player can do three things:</h2>
<ol>
	<li> Set a target time.</li>
	<li>Start and then stop the stopwatch to try to match the target time within a margin of error (currently given as 0.5sec).</li>
	<li>Page will display whether player succeeded or failed, then allow player to go again by setting new target time.</li>
</ol>

<h2>Changes from 'baseline' stopwatch:</h2>

<p>Original stopwatch exercise had conditionals that threw errors for:</p>
<ul>
	<li>consecutive call on start() function</li>
	<li>consecutive call on stop() function</li>
</ul>
<p>Gameplay removes the above error/alert need by disabling buttons after one click and also signals through CSS styling what is a valid action or not.</p>

<p>CSS is used to provide additional visual cues by switching out imagery.</p>

<p>Some console-only notes (such as tied to <span>Set Time</span>/reset) remain for those who bother opening the console.</p>

<p>CSS issue to resolve: understanding why <span>Stop</span> button remains red despite other button:disabled styling applied. Currently patched over temporarily.</p>

<h2>Walkthrough:</h2>

<ol>
	<li>When player clicks <span>Set Time</span>, the only functional button,
		<ol>
			<li>A random number between 0 and 1 is generated, multipied by 10 for a max 10sec target time, which is displayed onscreen.</li>
			<li>Player can no longer click <span>Set Time</span> but <span>Start</span> becomes clickable.</li>
		</ol>
	</li>
	<li>When player clicks <span>Start</span>, 
		<ol>
			<li>the current date/time is set (new Date).</li>
			<li><span>Start</span> becomes disabled; <span>Stop</span> is enabled.</li>
			<li>Image for "start" is hidden; image for "enroute" is made visible.</li>
		</ol>
	</li>
	<li>When player clicks <span>Stop</span>, 
		<ol>
			<li>the current date/time is set (new Date).</li>
			<li><span>Stop</span> becomes disabled; <span>Set Time</span> is enabled.</li>
			<li>Image for "enroute" is hidden.</li>
			<li>The duration elapsed between click of <span>Start</span> and <span>Stop</span> is calculated and compared to target time (absolute value).</li>
			<li>Conditionally, if it's within the allowable margin, SUCCESS is signaled through announcement and image reveal, and time achieved is also reported. If not, FAILURE is signaled in same form, with different imagery. Time achieved is still reported.</li>
		</ol>
	<li>When player next clicks <span>Set Time</span>,
		<ol>
			<li>duration, start time, end time, are all zeroed out,</li>
			<li>announcement area is cleared/made empty,</li>
			<li>and image visibilities changed back to show only starting image for a fresh start.</li>
		</ol>
	</li>
</ol>

<h2>Live</h2>
<p>https://h-yung.github.io/stopwatchDeliveryGame/</p>
