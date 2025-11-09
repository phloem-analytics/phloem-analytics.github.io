export default {
  id: 'security-legacy-systems',
  title: 'Security Vulnerabilities in Legacy Systems',
  shortDescription: 'Comprehensive assessment of security risks in legacy system deployments and mitigation strategies.',
  date: '2024-10-15',
  image: '/images/reports/security-legacy-thumb.png',
  pdfPath: '/reports/security-vulnerabilities-legacy-systems.pdf',

  content: () => (
    <>
      <p>
        This report presents a systematic analysis of security vulnerabilities commonly found in
        legacy systems that remain in production environments. Drawing from incident data and
        security audits across multiple sectors, we identify critical risk factors and propose
        practical mitigation approaches.
      </p>

      <h3>Major Topics Covered</h3>
      <ul>
        <li>Authentication bypass vulnerabilities in outdated protocols</li>
        <li>Unpatched systems and the growing attack surface</li>
        <li>Case studies of successful exploits and their root causes</li>
        <li>Cost-benefit analysis of system modernization vs. compensating controls</li>
        <li>Recommended security frameworks for legacy system protection</li>
      </ul>

      <h3>Critical Vulnerabilities</h3>
      <p>
        Our research identified several recurring vulnerability patterns across legacy deployments.
        The most critical include weak cryptographic implementations, insecure default configurations,
        and lack of security updates due to vendor end-of-life status. These create significant
        exposure to both automated attacks and targeted threat actors.
      </p>

      <h3>Mitigation Strategies</h3>
      <p>
        Organizations maintaining legacy infrastructure will find actionable guidance for reducing
        risk while planning longer-term modernization initiatives. Network segmentation, enhanced
        monitoring, and compensating controls can provide interim protection while migration planning
        proceeds.
      </p>

      <h3>Recommendations</h3>
      <p>
        We recommend a risk-based approach prioritizing the most critical systems for immediate
        attention. Investment in security monitoring and incident response capabilities provides
        defense-in-depth while modernization efforts progress.
      </p>
    </>
  )
}
