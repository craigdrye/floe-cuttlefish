# Cloud / Infrastructure Roadmap
**ID**: `cloudInfrastructureRoadmap` - **Discipline**: Technology - **Level**: Career

## Course Aim
Teach learners the practical language of cloud and platform work: IAM, networks, deployment, observability, reliability, latency, failover, cost, and operational ownership. The goal is to understand what platform teams mean and what decisions they need.

## Course Design Notes
Route questions here when they test cloud architecture, infrastructure operations, access control, VPC design, monitoring, incident response, cost tradeoffs, or platform-team communication. Keep examples vendor-neutral unless a specific service concept matters.

## Chapter 1: Cloud Building Blocks
- **Key concepts**: accounts, regions, availability zones, compute, storage, managed services, shared responsibility.
- **Practice questions**: What is managed by the provider? What remains the team responsibility?
- **Work output**: service responsibility map.

## Chapter 2: IAM and Network Boundaries
- **Key concepts**: IAM roles, least privilege, VPC, subnet, routing, firewall rule, private endpoint.
- **Practice questions**: Who can access what? Which path is exposed? What should be restricted?
- **Work output**: access and network review checklist.

## Chapter 3: Deployment and Change Safety
- **Key concepts**: CI/CD, infrastructure as code, blue-green deployment, rollback, migration, feature flag.
- **Practice questions**: What could fail during release? How do we roll back safely?
- **Work output**: deployment risk note.

## Chapter 4: Observability and Reliability
- **Key concepts**: logs, metrics, traces, SLO, error budget, alert, saturation, latency.
- **Practice questions**: Is the system unhealthy? Which signal proves user impact?
- **Work output**: reliability dashboard plan.

## Chapter 5: Cost and Capacity Tradeoffs
- **Key concepts**: autoscaling, reserved capacity, right-sizing, storage tiers, egress, cost allocation.
- **Practice questions**: Where is waste? What cost cut increases risk? What needs forecasting?
- **Work output**: cloud cost action list.

## Capstone
Review a fictional cloud service and produce a platform-readiness brief covering access, network, deployment, observability, reliability, and cost.

