import { NextResponse } from 'next/server';
import requestIp from 'request-ip';

export async function GET(request) {
  try {
    // Obtén la IP del cliente
    const clientIp = requestIp.getClientIp(request) || 'IP no detectada';

    // Ejemplo: Agregar lógica para clasificar regiones
    let region = 'desconocida';
    const latitudMexicoCentral = 22; // Referencia de latitud para norte/sur

    // Aquí puedes usar la IP para determinar la región si tienes un servicio de geolocalización

    return NextResponse.json({
      ip: clientIp,
      loc: `LatitudFalsaParaPruebas: ${latitudMexicoCentral}`, // Agregar lógica real si es necesario
      region,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'No se pudo obtener la IP del cliente' },
      { status: 500 }
    );
  }
}
