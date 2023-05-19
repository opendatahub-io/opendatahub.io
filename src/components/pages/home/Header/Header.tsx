import { Button, Flex, FlexItem, Title } from "@patternfly/react-core";
import { Link } from "gatsby";
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

import logo from "../../../../content/assets/img/logos/datahub_color_vert-gry-bg.png";
import "./Header.css";
import { particle_config } from "./config";

export const Header = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="header-group">
      <Flex
        direction={{ default: "column" }}
        justifyContent={{ default: "justifyContentCenter" }}
      >
        <FlexItem className="overlay">
          <img
            src={logo}
            alt="Open Data Hub Logo"
            style={{ maxWidth: "15rem" }}
          />
        </FlexItem>
        <FlexItem className="overlay" spacer={{ default: "spacer3xl" }}>
          <Title headingLevel="h1" size="4xl">
            An AI Platform for the Hybrid Cloud
          </Title>
        </FlexItem>
        <FlexItem className="overlay">
          <Button
            isLarge
            variant="primary"
            component={(props: any) => (
              <Link
                {...props}
                to="/docs/getting-started-with-open-data-hub"
              />
            )}
          >
            Get Started
          </Button>
        </FlexItem>
      </Flex>
      <Particles
        canvasClassName="particles header-group"
        height="90%"
        id="tsparticles"
        init={particlesInit}
        options={particle_config}
      />
    </div>
  );
};
