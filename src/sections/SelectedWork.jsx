import { useState } from "react";
import { ArrowDownRight, X } from "lucide-react";

import groundPlan from "../assets/plans/Ground.png";
import firstPlan from "../assets/plans/First.png";
import secondPlan from "../assets/plans/Second.png";
import terracePlan from "../assets/plans/Terrace.png";
import finalPlan from "../assets/plans/Final.png";
import frontElevation from "../assets/plans/Front Elevation.png";

import bedroomInterior from "../assets/images/VRay Render.jpeg";
import bedroom3DRender from "../assets/images/Sketchup 3D Model.png";

function SelectedWork() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      number: "01 / 08",
      title: "GROUND FLOOR",
      image: groundPlan,
    },
    {
      number: "02 / 08",
      title: "FIRST FLOOR",
      image: firstPlan,
    },
    {
      number: "03 / 08",
      title: "SECOND FLOOR",
      image: secondPlan,
    },
    {
      number: "04 / 08",
      title: "TERRACE",
      image: terracePlan,
    },
    {
      number: "05 / 08",
      title: "FINAL PLAN",
      image: finalPlan,
    },
    {
      number: "06 / 08",
      title: "FRONT ELEVATION",
      image: frontElevation,
    },
    {
      number: "07 / 08",
      title: "SKETCHUP 3D MODEL",
      image: bedroom3DRender,
    },
    {
      number: "08 / 08",
      title: "VRAY RENDER",
      image: bedroomInterior,
    },
  ];

  return (
    <>
      <section className="selected-work" id="work">
        <div className="section-heading">
          <div>
            <p className="section-number">02</p>
            <p className="section-label">SELECTED WORK</p>
          </div>

          <p className="section-description">
            RESIDENTIAL PLANNING AND
            <br />
            ARCHITECTURAL DRAWINGS
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article className="plan-card" key={plan.number}>
              <button
                type="button"
                className="plan-image"
                onClick={() => setSelectedPlan(plan)}
                aria-label={`View ${plan.title}`}
              >
                <img src={plan.image} alt={plan.title} />
              </button>

              <div className="plan-info">
                <div>
                  <p className="plan-number">{plan.number}</p>
                  <h2>{plan.title}</h2>
                </div>

                <ArrowDownRight size={20} strokeWidth={1.5} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedPlan && (
        <div
          className="plan-modal"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="plan-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="plan-modal-close"
              onClick={() => setSelectedPlan(null)}
              aria-label="Close plan preview"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <img
              src={selectedPlan.image}
              alt={selectedPlan.title}
              className="plan-modal-image"
            />

            <div className="plan-modal-title">
              {selectedPlan.title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectedWork;