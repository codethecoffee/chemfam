import React, { Component } from "react";
import update from "react-addons-update";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import logo from "./svg/chem.gif";
import "./App.css";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      name: "",
      symbol: "",
      location: "",
      question: "",
      image: "",
      hint: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        true: 0,
        false1: 0,
        false2: 0,
        false3: 0
      },
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      name: quizQuestions[0].name,
      location: quizQuestions[0].location,
      question: quizQuestions[0].question,
      image: quizQuestions[0].image,
      hint: quizQuestions[0].hint,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });

    this.setState(
      {
        answersCount: updatedAnswersCount,
        answer: answer
      },
      () => {
        console.log(
          "updated state value",
          this.state.answersCount,
          this.state.answer
        );
      }
    );
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      name: quizQuestions[counter].name,
      symbol: quizQuestions[counter].symbol,
      location: quizQuestions[counter].location,
      question: quizQuestions[counter].question,
      image: quizQuestions[counter].image,
      hint: quizQuestions[counter].hint,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    console.log("Number of trues:", this.state.answersCount.true);

    this.setState({ result: this.state.answersCount.true.toString() });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        name={this.state.name}
        symbol={this.state.symbol}
        location={this.state.location}
        question={this.state.question}
        image={this.state.image}
        hint={this.state.hint}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} total={this.state.counter + 1} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-header-text"> Chem Fam</h2>

          <Modal
            trigger={
              <Button className="button" inverted color="blue" size="huge">
                How to Play
              </Button>
            }
            basic
            size="huge"
          >
            <Modal.Header>How to Play</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  You live in Chemtopia, a world where chemistry elements are
                  people just like you and me; they have unique looks,
                  personalities, and pet peeves (note: these traits are based on
                  the unique chemical and physical properties of each element).
                </p>
                <p>
                  <b>
                    There is an orphan crisis in Chemtopia, and you're a
                    chemistry major hired straight out of undergrad by the
                    government to help these orphans find their families.
                  </b>
                </p>
                <p>
                  Chemtopia is divided into several major families: the alkali
                  metals, alkaline earth metals, halogens, noble gases, and
                  transition metals. Although each element is one of a kind,
                  there are still general trends in the personalities and looks
                  for each family. This is all you have at your disposal:
                </p>
                <p>1) A photo of the orphan</p>
                <p>2) The name of the orphan </p>
                <p>
                  3) A small snippet the orphan wrote about himself or herself.
                </p>
                <p>
                  Based on those three pieces of information, you must correctly
                  determine which family each orphan belongs to. Good luck! The
                  future of these orphans depends on you; who knows what will
                  happen if an alkali metal orphan is accidentally sent to a
                  halogen family.
                </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Button
            href="http://www.justlovechem.com/"
            target="_blank"
            className="button"
            inverted
            color="blue"
            size="huge"
          >
            The Fam
          </Button>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
