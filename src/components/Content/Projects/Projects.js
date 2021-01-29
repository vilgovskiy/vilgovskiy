import React from "react";
import "./Projects.css";
import {
  SiGo,
  SiKubernetes,
  SiHelm,
  SiPrometheus,
  SiJava,
  SiAmazonaws,
  SiRuby,
  SiRails,
  SiPostgresql,
  SiBootstrap,
} from "react-icons/si";

const Projects = (props) => {
  return (
    <section id="projects" className="Projects">
      <div className="Project">
        <h3 className="ProjectTitle">Container Optimization Data Forwarder</h3>
        <div className="ProjectDescription">
          <div className="UsedTech">
            <SiGo size={30} />
            <SiPrometheus size={30} />
            <SiKubernetes size={30} />
            <SiHelm size={30} />
          </div>
          <p>Containerized microservice written in Golang.</p>
          <p>
            It uses Prometheus query language to aggregate Cluster metrics,
            collected by Prometheus server and forwards this data to Densify
            specified Densify instance. The application uses token-based
            authentication to issue API calls to Prometheus service in
            Kubernetes cluster and performes security certificate validation
            against provided certificate authority. Token and cerificate can be
            deployed to cluster by user or default cluster resources will be
            used.
          </p>
          <p>It can de deployed manually or via Helm chart.</p>
          <div className="ProjectLinks">
            <a
              href="https://github.com/densify-dev/Container-Optimization-Data-Forwarder"
              className="LinkButton"
            >
              GitHub
            </a>
            <a
              href="https://github.com/densify-dev/helm-charts"
              className="LinkButton"
            >
              Helm chart GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="Project">
        <h3 className="ProjectTitle">
          Densify resource provider for AWS CloudFormation
        </h3>
        <div className="ProjectDescription">
          <div className="UsedTech">
            <SiJava size={30} />
            <SiAmazonaws size={30} />
          </div>
          <p>
            Custom resource providers were announced at re:Invent 2019 and
            Densify was among first 7 companies to create a custom resource in
            collaboration with AWS Development team.
          </p>
          <p>
            Densify::Optimization::Recommendation resource is written in Java.
            It uses Densify API and AWS Parameter Store to fetch sizing
            recommendatons for connected instances and apply approved
            recommndations through CloudFormation template with only 1 click!
          </p>
          <p>
            This automation is performed by matching Provisioning ID of existing
            instance to a recommenation field in Densify and storing this
            configuration as Parameter in AWS. The entire environment update
            process took between 5 seconds and 1 minute, depending on state of
            CloudFormation, and could update up to 200 instances at a time, only
            limited by CloudFormation parameter restriction.
          </p>
          <div className="ProjectLinks">
            <a
              href="https://github.com/densify-dev/cloudformation-optimization-as-code"
              className="LinkButton"
            >
              GitHub
            </a>
            <a
              href="https://aws.amazon.com/blogs/aws/cloudformation-update-cli-third-party-resource-support-registry/"
              className="LinkButton"
            >
              Blog by Jeff Barr
            </a>
          </div>
        </div>
      </div>
      <div className="Project">
        <h3 className="ProjectTitle">
          Borowly - Platform for borrowing and lending items
        </h3>
        <div className="ProjectDescription">
          <div className="UsedTech">
            <SiRuby size={30} />
            <SiRails size={30} />
            <SiPostgresql size={30} />
            <SiBootstrap size={30} />
          </div>
          <p>
            University course project built with RubyOnRails and deployed on
            Heroku with PostgreSQL database in the backend. The frontend uses
            vanilla JavaScript and Bootstrap.
          </p>
          <p>
            It is an online platform for communities that allows registered
            users to borrow things from their neighbours and keep track of items
            that you lended or borrowed.
          </p>
          <p>
            Users could list items they are willing to lend or items they need
            to borrow Allows users to register or sign in via Facebook.
            Application is hooked up to email service that sends users
            confirmations and reminders when it's time to return items. There is
            also a map view that allows users to see what items can be borrowed
            in their area.
          </p>
          <p>
            Registration and authentication layer utilizes sessions and
            encryption to keep track of active users and keeping sensitive data
            safe.
          </p>
          <div className="ProjectLinks">
            <a
              href="https://github.com/vilgovskiy/Back-On-Rails"
              className="LinkButton"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
