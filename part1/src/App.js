import { useState } from "react";

const Statistics = (props) => {
	return (
		<div>
			<h2>Statistics</h2>
			<p>good: {props.good}</p>
			<p>neutral: {props.neutral}</p>
			<p>bad: {props.bad}</p>
			<p>all: {props.all}</p>
			<p>average: {props.average}</p>
			<p>positive: {props.positive}</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => {
		setGood(good + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
	};
	const handleBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1>Give your feedback</h1>
			<div>
				<button onClick={handleGood}>Good</button>
				<button onClick={handleNeutral}>neutral</button>
				<button onClick={handleBad}>bad</button>
			</div>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={good + neutral + bad}
				average={(good + neutral + bad) / 3}
				positive={(good / (good + neutral + bad)) * 100}
			/>
		</div>
	);
};

export default App;
