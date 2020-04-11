import React from 'react';

const Course = props => {
  const Header = props => {
    return <h1>{props.course}</h1>;
  };

  const Part = props => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

  const Content = props => {
    return (
      <>
        {props.parts.map(part => (
          <Part key={part.name} part={part} />
        ))}
      </>
    );
  };

  const Total = props => {
    const total = props.parts.reduce(function(acc, obj) {
      return acc + obj.exercises;
    }, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

export default Course;
