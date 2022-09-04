export const strengthRegexes = {
    length: (/?=.{8,}/),
    uppercase: (/?=.*[A-Z]/),
    lowercase: (/?=.*[a-z]/),
    numbers: (/?=.*[0-9]/),
    symbols: (/[^A-Za-z0-9]/)
}