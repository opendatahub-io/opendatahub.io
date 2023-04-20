import React from "react";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Header.css"
import { particle_config } from "./config";
import { Button, Flex, FlexItem, Title } from "@patternfly/react-core";
import logo from "../../../../images/logos/datahub_color_vert-gry-bg.png"
import { Link } from "gatsby";

export const Header = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (

    <div className="header-group">
      <Flex direction={{default: "column"}} justifyContent={{default: "justifyContentCenter"}}>
        <FlexItem className="overlay">
          <img src={logo} alt="Open Data Hub Logo" style={{ maxWidth: "15rem" }} />
        </FlexItem>
        <FlexItem className="overlay" spacer={{ default: 'spacer3xl' }}>
          <Title headingLevel="h1" size="4xl">A Data & AI Platform for the Hybrid Cloud</Title>
        </FlexItem>
        <FlexItem className="overlay">
          <Button isLarge variant='primary' component={(props: any) => <Link {...props} to="/docs/getting-started/quick-installation.html" />}>
            Get Started
          </Button>
        </FlexItem>
      </Flex>
      <Particles
        canvasClassName="particles header-group"
        id="tsparticles"
        init={particlesInit}
        height="100vh"
        options={particle_config}
      />

    </div>
  );
};