import rocketIcon from "./images/rocket.svg";
import translatorIcon from "./images/translator.svg";
import diagramIcon from "./images/diagram.svg";
import manIcon from "./images/man.svg";
import brainIcon from "./images/brain.svg";
import pieIcon from "./images/pie.svg";
import * as React from "react";

export default [
  [
    [
      rocketIcon,
      "Boosted profits",
      <>
        Cutting edge advantage <br className="hidden lg:block" />
        of tailored ML resulting in boosted <br className="hidden lg:block" />
        ROMI, ARPU and reduced CAC, Churn
      </>,
    ],
    [
      translatorIcon,
      "ML-attribution",
      <>
        Find out which marketing channel is most likely to lead to customer
        conversions
      </>,
    ],
    [
      diagramIcon,
      "Predictive analytics",
      <>
        Enrich your customer data with accurate predictions of their future
        actions and value: Lead, Cbuyer, ARPU, LTV...
      </>,
    ],
  ],
  [
    [
      manIcon,
      "Data personalisation",
      <>
        Offer personalised pricing and suggestions{" "}
        <br className="hidden lg:block" />
        to your customers based on their interests{" "}
        <br className="hidden lg:block" />
        and behaviours
      </>,
    ],
    [
      brainIcon,
      "ML experiments",
      <>
        Flexible system of iterative A/B tests{" "}
        <br className="hidden lg:block" />
        on HADI cycles for marketing activities
      </>,
    ],
    [
      pieIcon,
      "End-to-end analytics",
      <>Comprehensive customer data from all sites and channels in one place</>,
    ],
  ],
];
