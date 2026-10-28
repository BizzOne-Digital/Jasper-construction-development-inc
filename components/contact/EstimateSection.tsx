import EstimateForm from "./EstimateForm";
export default function EstimateSection() {
  return (
    <section className="estimate-section" aria-labelledby="estimate-title">
      <div className="estimate-copy">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2 id="estimate-title">
          Let?s bring your
          <br />
          vision to life.
        </h2>
        <p>Tell us about your project.</p>
        <svg
          className="house-drawing"
          viewBox="0 0 500 220"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth=".7">
            <path d="M20 175 180 75l140 78v65H20zM180 75v143M30 182l150-94 130 73M55 217v-39l58-35v75M207 218V130l77 43v45M150 218v-93M320 218V43l149 76v99M320 43l-69 48v39M333 58l125 65v95M350 218v-74l81 40v34M20 190l160-94 140 77M320 74l149 76" />
          </g>
        </svg>
      </div>
      <EstimateForm />
    </section>
  );
}
