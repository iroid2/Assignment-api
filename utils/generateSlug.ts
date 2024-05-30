export function generateSlug(title: string): string {
    // Convert title to lowercase and replace spaces with hyphens
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    
    // Remove any special characters except hyphens
    const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');

    // Remove leading and trailing hyphens
    const finalSlug = cleanSlug.replace(/^-+|-+$/g, '');

    return finalSlug;
}