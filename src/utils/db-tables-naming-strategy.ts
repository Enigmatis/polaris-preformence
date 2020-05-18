import {DefaultNamingStrategy, NamingStrategyInterface} from 'typeorm';

export class DbTablesNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    tableName(className: string, customName: string): string {
        return customName ? customName.toLowerCase() : className.toLowerCase();
    }

    columnName(
        propertyName: string,
        customName: string,
        embeddedPrefixes: string[],
    ): string {
        const t = embeddedPrefixes.join('_').toLowerCase();
        const x = customName ? customName.toLowerCase() : propertyName.toLowerCase();
        return t ? t + '_' + x : x;
    }
}
