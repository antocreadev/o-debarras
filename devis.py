from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER

# --- CONFIGURATION ---
output = "devis_QT-VLWLL7PX-0001-1_final.pdf"
width, height = A4
left, right, top, bottom = 25*mm, 25*mm, 25*mm, 25*mm

c = canvas.Canvas(output, pagesize=A4)
styles = getSampleStyleSheet()
normal = styles["Normal"]
normal.fontName = "Helvetica"
normal.fontSize = 9
normal.leading = 12

# --- EN-TÊTE ---
c.setFont("Helvetica-Bold", 18)
c.drawString(left, height - top, "DEVIS")
c.setFont("Helvetica", 10)
c.drawRightString(width - right, height - top + 3, "QT-VLWLL7PX-0001-1")

# --- COORDONNÉES ---
c.setFont("Helvetica-Bold", 11)
c.drawString(left, height - top - 15*mm, "Antò Creative Developer")
c.setFont("Helvetica", 9)
c.drawString(left, height - top - 21*mm, "Anthony Menghi ~ SIREN : 914116835")
c.drawString(left, height - top - 26*mm, "IBAN : FR76 2823 3000 0124 6544 1599 321 ~ BIC : REVOFRP2")
c.drawString(left, height - top - 31*mm, "+33 7 83 26 75 95")

# --- CLIENT ---
c.setFont("Helvetica-Bold", 10)
c.drawRightString(width - right, height - top - 15*mm, "DEVIS POUR")
c.setFont("Helvetica", 9)
c.drawRightString(width - right, height - top - 21*mm, "KEVIN CAPURAN - Ò DEBARRAS")

# --- DATES ---
c.setFont("Helvetica", 9)
c.drawRightString(width - right, height - top - 35*mm, "DATE D'ÉMISSION : 23 Oct 2025")
c.drawRightString(width - right, height - top - 40*mm, "DATE D'EXPIRATION : 22 Nov 2025")
c.drawRightString(width - right, height - top - 45*mm, "VALIDITÉ : Jusqu'au 22 Nov 2025")

# --- LIGNE DE SÉPARATION ---
c.setStrokeColor(colors.black)
c.setLineWidth(0.7)
c.line(left, height - top - 50*mm, width - right, height - top - 50*mm)

# --- TABLEAU DES PRESTATIONS ---
data = [
    ["DESCRIPTION", "QTY", "PRIX UNIT.", "MONTANT"],
    [
        "Conception et développement d’une plateforme web complète (landing page + pages secondaires), intégrant un design responsive mobile-first, une direction artistique UI/UX sur mesure avec création d’un thème visuel cohérent, micro-interactions dynamiques et animations avancées. Intégration optimisée du flux Instagram pour enrichissement de contenu et cohérence cross-média.",
        "1", "€ 1 500,00", "€ 1 500,00"
    ],
    [
        "Refonte et optimisation d’un logotype sur base existante, avec déclinaisons multi-supports et livrables en formats vectoriels et bitmap haute définition. Fourniture de versions monochromatiques (noir/blanc) et adaptables à toutes résolutions, garantissant une scalabilité illimitée sans perte de qualité.",
        "1", "€ 250,00", "€ 250,00"
    ]
]

# Largeurs des colonnes
table_width = width - left - right
col_widths = [table_width * 0.65, table_width * 0.10, table_width * 0.12, table_width * 0.13]

# Conversion en Paragraph pour gestion du retour à la ligne
table_data = []
for i, row in enumerate(data):
    if i == 0:
        table_data.append([Paragraph(f"<b>{x}</b>", normal) for x in row])
    else:
        table_data.append([Paragraph(x, normal) for x in row])

# Création du tableau
table = Table(table_data, colWidths=col_widths, repeatRows=1)
table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.whitesmoke),
    ('TEXTCOLOR', (0,0), (-1,0), colors.black),
    ('ALIGN', (1,1), (-1,-1), 'CENTER'),
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('INNERGRID', (0,0), (-1,-1), 0.25, colors.grey),
    ('BOX', (0,0), (-1,-1), 0.25, colors.grey),
    ('LEFTPADDING', (0,0), (-1,-1), 6),
    ('RIGHTPADDING', (0,0), (-1,-1), 6),
]))

table_x = left
table_y = height - top - 140*mm
w, h = table.wrapOn(c, table_width, height)
table.drawOn(c, table_x, table_y)

# --- SOUS-TOTAL & TOTAL ---
c.setFont("Helvetica-Bold", 10)
c.drawRightString(width - right - 25*mm, table_y - 18*mm, "Sous-total")
c.setFont("Helvetica", 10)
c.drawRightString(width - right, table_y - 18*mm, "€ 1 750,00")

c.setFont("Helvetica-Bold", 10)
c.drawRightString(width - right - 25*mm, table_y - 28*mm, "Total")
c.setFont("Helvetica", 10)
c.drawRightString(width - right, table_y - 28*mm, "€ 1 750,00")

# --- NOTES ---
note_y = table_y - 50*mm
c.setFont("Helvetica", 9)
c.drawString(left, note_y, "TVA non applicable, article 293 B du code général des impôts")
c.drawString(left, note_y - 6*mm, "30 % du montant total à la signature du devis. € 1 750,00")

# --- PIED DE PAGE ---
c.setFont("Helvetica-Oblique", 8)
c.drawString(left, bottom, "QT-VLWLL7PX-0001-1  –  Page 1 sur 1")

c.showPage()
c.save()

print(f"✅ PDF généré : {output}")
