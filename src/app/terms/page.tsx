import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#E0A75E] bg-opacity-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-[#6c0707] text-white py-6 px-6">
          <h1 className="text-3xl font-bold">Terms and Conditions</h1>
          <h2 className="text-xl mt-2">
            Pharma Leadership: Building a Culture of Innovation and Excellence
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <Section title="Registration and Payment">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All registrations must be completed through the official event
                website.
              </li>
              <li>
                Payment is required at the time of registration to secure your
                spot.
              </li>
              <li className="font-semibold">
                Please note: All payments are non-refundable.
              </li>
              <li>
                Ensure you select the correct registration category. Incorrect
                category selections may result in additional charges or denied
                entry.
              </li>
            </ul>
          </Section>

          <Section title="Attendance and Conduct">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Attendees must wear their official conference badge at all times
                during the event.
              </li>
              <li>
                Professional conduct is expected from all participants
                throughout the conference.
              </li>
              <li>
                The organizers reserve the right to refuse entry or remove any
                person from the event at their discretion.
              </li>
            </ul>
          </Section>

          <Section title="Cancellation and Refund Policy">
            <p>
              Amount paid for registration is non-refundable and
              non-transferable.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              All content presented at the conference is protected by copyright.
              Unauthorized recording or reproduction of sessions is strictly
              prohibited.
            </p>
          </Section>

          <div className="mt-8 p-4 bg-[#E0A75E] text-[#6c0707] rounded-lg font-semibold text-center">
            By registering for this event, you agree to abide by these terms and
            conditions.
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3 text-[#6c0707]">{title}</h3>
      {children}
    </div>
  );
}
