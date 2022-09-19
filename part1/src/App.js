import { useState } from "react";

const anecdotes = [
	"Adding manpower to a late software project makes it later!",
	"The best way to get a project done faster is to start sooner.",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Even the best planning is not so omniscient as to get it right the first time.",
	"How does a project get to be a year late?... One day at a time.",
	"The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging.",
	"Plan to throw one (implementation) away; you will, anyhow.",
	"Every good work of software starts by scratching a developers personal itch",
	"Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Program testing can be used to show the presence of bugs, but never to show their absence!",
];

const App = () => {
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(
		new Array(anecdotes.length + 1).join(0).split("").map(parseFloat)
		// new Array(anecdotes.length).fill(0)
	);

	const generatedRandomNumber = (maxAnecdotes) => () => {
		const randomNum = Math.floor(Math.random() * maxAnecdotes);
		setSelected(randomNum);
	};

	const voteForCurrentAnecdote = (selected) => () => {
		votes[selected] += 1;

		setVotes([...votes]);
		console.log(votes);
	};

	return (
		<div>
			<h1>Anecdotes</h1>
			<div>
				<p>{anecdotes[selected]}</p>
				<p>has {votes[selected]} votes</p>
			</div>
			<div>
				<button onClick={voteForCurrentAnecdote(selected)}>vote</button>
				<button onClick={generatedRandomNumber(anecdotes.length)}>Next anecdote</button>
			</div>
		</div>
	);
};

export default App;
