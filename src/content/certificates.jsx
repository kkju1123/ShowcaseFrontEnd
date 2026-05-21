import React from "react";
import cer1 from "../assets/cer1.png";
import cer2 from "../assets/cer2.png";
import "../style/certificates.css";

const content = {
  en: {
    title: "Certificates",
    subtitle: "Cloud and deep learning credentials",
    issued: "Issued",
    credentialId: "Credential ID",
    certificates: [
      {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services",
        issued: "Nov 2025",
        credentialId: "LGW679BZH4TV",
        image: cer1,
      },
      {
        title: "IBM Deep Learning with PyTorch, Keras and Tensorflow Specialization",
        issuer: "IBM",
        issued: "Nov 2025",
        credentialId: "9D0I0ZPRX5L6",
        image: cer2,
      },
    ],
  },
  zh: {
    title: "证书",
    subtitle: "云计算与深度学习相关认证",
    issued: "签发时间",
    credentialId: "证书编号",
    certificates: [
      {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services",
        issued: "2025年11月",
        credentialId: "LGW679BZH4TV",
        image: cer1,
      },
      {
        title: "IBM Deep Learning with PyTorch, Keras and Tensorflow Specialization",
        issuer: "IBM",
        issued: "2025年11月",
        credentialId: "9D0I0ZPRX5L6",
        image: cer2,
      },
    ],
  },
};

export default function Certificates({ language = "en" }) {
  const t = content[language] || content.en;

  return (
    <main className="certificates-page">
      <header className="certificates-header">
        <div className="certificates-title">{t.title}</div>
        <p className="certificates-subtitle">{t.subtitle}</p>
      </header>

      <section className="certificates-grid">
        {t.certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.credentialId}>
            <div className="certificate-image-wrap">
              <img
                className="certificate-image"
                src={certificate.image}
                alt={`${certificate.title} certificate`}
              />
            </div>
            <div className="certificate-content">
              <div className="certificate-title">{certificate.title}</div>
              <div className="certificate-issuer">{certificate.issuer}</div>
              <div className="certificate-meta">
                <span>{t.issued}</span>
                <strong>{certificate.issued}</strong>
              </div>
              <div className="certificate-meta">
                <span>{t.credentialId}</span>
                <strong>{certificate.credentialId}</strong>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
