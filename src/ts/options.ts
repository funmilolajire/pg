export type PasswordStrength = 'too-weak' | 'weak' | 'medium' | 'strong' | undefined
export type ConfigItem = 'uppercase' | 'lowercase' | 'numbers' | 'symbols'

export const options: { length: number, config: ConfigItem[], strength:PasswordStrength } = {
    length: 0,
    config: [],
    strength: undefined
}
