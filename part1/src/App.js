import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	return (
		<div>
			<h2>Statistics</h2>
			{props.all ? (
				<table>
					<tbody>
						<StatisticsLine text="good" value={props.good} />
						<StatisticsLine text="neutral" value={props.neutral} />
						<StatisticsLine text="bad" value={props.bad} />
						<StatisticsLine text="all" value={props.all} />
						<StatisticsLine text="average" value={props.average} />
						<StatisticsLine text="positive" value={props.positive} />
					</tbody>
				</table>
			) : (
				<h3>No feedback given</h3>
			)}
		</div>
	);
};

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
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
				<Button onClick={handleGood} text="Good" />
				<Button onClick={handleNeutral} text="Neutral" />
				<Button onClick={handleBad} text="Bad" />
			</div>

			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				all={good + neutral + bad}
				average={(good - bad) / (good + neutral + bad)}
				positive={(good / (good + neutral + bad)) * 100}
			/>
		</div>
	);
};

export default App;
