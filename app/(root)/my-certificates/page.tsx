import PageHeader from "@/components/dashboard/pageHeadert";
import CertificateCard from "@/components/my-certificates/certificateCard";
import { getCertificates } from "@/lib/api/getCertificates";
import { redirect } from "next/navigation";

export async function MyCertificates() {
  const certificates = (await getCertificates()) ?? [];
  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader
        title="My Certificates"
        subtitle="View your earned certificates"
      />
      {/* Certificates List*/}
      {certificates.length === 0 ? (
        <p className="text-center text-gray-500">No certificates found.</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-2">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCertificates;
