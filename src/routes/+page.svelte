<script>
	let { data } = $props();
</script>

<h1>Testing Facility</h1>
<ul>
	<li>{data.systemInfo.speed}</li>
	<li>{data.systemInfo.model}</li>
	<li>{data.systemInfo.hostname}</li>
	<li>{data.systemInfo.networkInterfaces}</li>
	<li>Total memory: {data.systemInfo.totalmem.toFixed(2)}</li>
	<li>Free memory: {data.systemInfo.freemem.toFixed(2)}</li>
	<li>Total uptime: {new Date(data.systemInfo.uptime * 1000).toISOString().slice(11, 19)}</li>
</ul>
