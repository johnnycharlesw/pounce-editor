export const getProjectTitleFromFilename = fileInputFilename => {
    if (!fileInputFilename) return '';
    // only parse title with valid pounce project extensions
    // (.sb, .sb2, .sb3, and .pproj)
    const matches = fileInputFilename.match(/^(.*)(\.sb[23]|\.pproj)?$/);
    if (!matches) return '';
    return matches[1].substring(0, 100); // truncate project title to max 100 chars
};
