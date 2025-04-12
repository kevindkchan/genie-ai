const steps = [
    { title: "✨ Make a Wish", subtitle: "Type your wish into the prompt.", icon: "fa-terminal" },
    { title: "🪄 Watch the Magic", subtitle: "Poof! Genie conjures up the code.", icon: "fa-window-restore" },
    { title: "💫 Grant Your Wish", subtitle: "Tweak it, remix it, or deploy it.", icon: "fa-cloud-arrow-up" }
  ];
  
  const Steps = () => (
    <div className="steps-container">
      <h1 className="scroll-animate">From Wish to Reality — Instantly.</h1>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step scroll-animate">
            <div className="step-text">
              <h1>{step.title}</h1>
              <div className="step-subheader">{step.subtitle}</div>
            </div>
            <div className="step-icon">
              <i className={`fa-solid ${step.icon}`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Steps;
  