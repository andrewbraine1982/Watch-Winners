"use client";

import { useState } from "react";
import "./SkillChallengeModal.css";

type Props = {
  open: boolean;
  title: string;
  question: string;
  image: string;
  answers: string[];
  correctAnswer: string;
  onClose: () => void;
  onSuccess: () => void;
};

export default function SkillChallengeModal({
  open,
  title,
  question,
  image,
  answers,
  correctAnswer,
  onClose,
  onSuccess,
}: Props) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  function handleContinue() {
    if (selected === correctAnswer) {
      setError("");
      onSuccess();
      return;
    }

    setError(
      "That's not the correct answer. Please try another competition."
    );
  }

  return (
    <div className="skill-modal-overlay">
      <div className="skill-modal">
        <button
          className="skill-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <span className="skill-tag">
          SKILL CHALLENGE
        </span>

        <h2>{title}</h2>

        <p className="skill-intro">
          Before proceeding, please answer one
          skill-based question.
        </p>

        <img
          src={image}
          alt="Competition question"
          className="skill-image"
        />

        <h3>{question}</h3>

        <div className="skill-options">
          {answers.map((answer) => (
            <button
              key={answer}
              type="button"
              className={`skill-option ${
                selected === answer ? "active" : ""
              }`}
              onClick={() => {
                setSelected(answer);
                setError("");
              }}
            >
              {answer}
            </button>
          ))}
        </div>

        {error && (
          <p className="skill-error">
            {error}
          </p>
        )}

        <button
          className="skill-continue"
          disabled={!selected}
          onClick={handleContinue}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
