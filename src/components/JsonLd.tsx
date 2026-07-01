/**
 * Renders a JSON-LD <script> for structured data. We use a native <script> tag
 * (recommended by Next.js for structured data) and escape "<" to its unicode
 * form to avoid any chance of breaking out of the script context.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
