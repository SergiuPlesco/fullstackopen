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

const Title = ({ title }) => <h1>{title}</h1>;
const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;
const Votes = ({ votes }) => <p> Has {votes} votes</p>;
const Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;

const App = () => {
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	const generatedRandomNumber = (maxAnecdotes) => () => {
		const randomNum = Math.floor(Math.random() * maxAnecdotes);
		setSelected(randomNum);
	};

	const voteForCurrentAnecdote = (selected) => () => {
		votes[selected] += 1;
		setVotes([...votes]);
	};

	return (
		<div>
			<div>
				<Title title="Anecdote of the day" />
				<Anecdote anecdote={anecdotes[selected]} />
				<Votes votes={votes[selected]} />
			</div>
			<div>
				<Button onClick={voteForCurrentAnecdote(selected)}>vote</Button>
				<Button onClick={generatedRandomNumber(anecdotes.length)}>Next anecdote</Button>
			</div>
			<div>
				<Title title="Anecdote with the most votes" />
				<Anecdote anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} />
				<Votes votes={Math.max(...votes)} />
			</div>
		</div>
	);
};

export default App;
