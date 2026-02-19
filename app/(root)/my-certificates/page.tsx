import PageHeader from "@/components/dashboard/pageHeadert";
import CertificateCard from "@/components/my-certificates/certificateCard";
import { certificates } from "@/data/certificates";

function MyCertificates() {
  return (
    <div className="h-screen overflow-y-auto p-4 m-2 space-y-4">
      <PageHeader
        title="My Certificates"
        subtitle="View your earned certificates"
      />

      {/* Certificates List*/}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-2">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default MyCertificates;
