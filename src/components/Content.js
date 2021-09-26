import { useState } from "react";
import classes from './Content.module.css'
import illustrationmobile from '../assets/illustrationmobile.svg'

const Content = () => {
    const [solution1, setSolution1] = useState(true);
    const [solution2, setSolution2] = useState(false);
    const [solution3, setSolution3] = useState(false);
    const [solution4, setSolution4] = useState(false);
    const [solution5, setSolution5] = useState(false);

    const toggleSolution1 = () => {
        setSolution1(!solution1);
    }

    const toggleSolution2 = () => {
        setSolution2(!solution2);
    }

    const toggleSolution3 = () => {
        setSolution3(!solution3);
    }

    const toggleSolution4 = () => {
        setSolution4(!solution4);
    }

    const toggleSolution5 = () => {
        setSolution5(!solution5);
    }

    return (
        <main className={classes.content}>

            <img className={classes.img} alt='A woman reading a whiteboard' src={illustrationmobile} /> 

            <h1>FAQ</h1>
            <div className={classes.container}>
            <div>
                <p className={classes.questions}>How many team members can I invite?
                    <button onClick={toggleSolution1}> {(solution1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>)}
                    </button></p>
                {solution1 && <p className={classes.answers}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
            </div>

            <div>
                <p className={classes.questions}>What is the maximum file upload size? <button onClick={toggleSolution2}>{(solution2 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>)} </button></p>
                {solution2 && <p className={classes.answers}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}

            </div>

            <div>
                <p className={classes.questions}>How do I reset my password?  <button onClick={toggleSolution3}>{(solution3 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>)} </button></p>
                {solution3 && <p className={classes.answers}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}

            </div>

            <div>
                <p className={classes.questions}>Can I cancel my subscription?  <button onClick={toggleSolution4}>{(solution4 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>)} </button></p>
                {solution4 && <p className={classes.answers}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}

            </div>

            <div>
                <p className={classes.questions}>Do you provide additional support? <button onClick={toggleSolution5}>{(solution5 ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>)} </button></p>
                {solution5 && <p className={classes.answers}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}

            </div>
            </div>
        </main>
    )
}

export default Content;